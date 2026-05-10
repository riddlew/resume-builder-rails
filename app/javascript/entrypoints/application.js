import registerAllComponents from "@shared/componentRegister"
import Dashboard from "@components/Dashboard"
import ResumeEditor from "@components/editor/ResumeEditor"

const componentRegistry = {
    'Dashboard': Dashboard,
    "ResumeEditor": ResumeEditor
}

registerAllComponents(componentRegistry)

