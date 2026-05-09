import registerAllComponents from "@shared/componentRegister"
import Dashboard from "@components/Dashboard"

const componentRegistry = {
    'Dashboard': Dashboard,
}

registerAllComponents(componentRegistry)

