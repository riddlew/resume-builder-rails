module ApplicationHelper
    def react_component(name, props = {}, klass = nil, **kwargs)
        data_attributes = {
            react_component: name,
            react_props: props.to_json
        }
        data_attributes.merge!(kwargs[:data]) if kwargs[:data]

        content_tag :div,
                    "",
                    class: klass,
                    data: data_attributes
    end
end
