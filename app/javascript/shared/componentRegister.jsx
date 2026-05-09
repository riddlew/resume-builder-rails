import React from 'react'
import { createRoot } from 'react-dom/client'

const componentRegistry = {}
const roots = new Map()
let listenersRegistered = false

const containersWithin = (rootElement) => {
    const containers = []

    if (rootElement?.matches?.('[data-react-component]')) {
        containers.push(rootElement)
    }

    if (rootElement?.querySelectorAll) {
        containers.push(...rootElement.querySelectorAll('[data-react-component]'))
    }

    return containers
}

const unmountRoot = (container) => {
    const root = roots.get(container)
    if (!root) {
        return
    }

    root.unmount()
    roots.delete(container)
    delete container._reactRoot
}

const pruneDisconnectedRoots = () => {
    roots.forEach((_, container) => {
        if (!container.isConnected) {
            unmountRoot(container)
        }
    })
}

const registerAllComponents = (registry) => {
    Object.assign(componentRegistry, registry)

    const mountComponents = (rootElement = document) => {
        pruneDisconnectedRoots()

        containersWithin(rootElement).forEach(container => {
            if (roots.has(container) || container._reactRoot) {
                return
            }

            const Component = componentRegistry[container.dataset.reactComponent]
            if (!Component) {
                return
            }

            const props = JSON.parse(container.dataset.reactProps || '{}')

            const root = createRoot(container)
            roots.set(container, root)
            container._reactRoot = root

            root.render(
                <>
                    <Component {...props} />
                </>
            )
        })
    }

    if (listenersRegistered) {
        mountComponents(document)
        return
    }

    listenersRegistered = true

    const mountDocumentComponents = () => mountComponents(document)

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountDocumentComponents)
    } else {
        mountDocumentComponents()
    }
}

export default registerAllComponents;