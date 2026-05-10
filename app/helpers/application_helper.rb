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

    def time_ago(time)
        now = Time.current
        today = Date.current

        if time > now - 1.hour
            "Now"
        elsif time.to_date == today
            "#{((now - time) / 1.hour).floor} hours ago"
        elsif time.to_date == today - 1.day
            "Yesterday"
        elsif time > today.beginning_of_week.to_time
            time.strftime("%A")
        else
            time.strftime("%b %d")
        end
    end
end
