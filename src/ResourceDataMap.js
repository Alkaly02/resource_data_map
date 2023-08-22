import React from 'react'

const ResourceDataMap = ({
    resourceData = [],
    resourceListItem: ResourceListItem,
    resourceName
}) => {
    return (
        <>
            {
                resourceData.map((resource, i) => {
                    return <ResourceListItem key={i} {...{ [resourceName]: resource }} />
                })
            }
        </>
    )
}

export default ResourceDataMap