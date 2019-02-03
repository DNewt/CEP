export function getDummyItems(projectID) {
    var project = getDummyProject(projectID)
    return project.children
}

export function addDummyItem(item, projectID) {
    var project = getDummyProject(projectID)
    project.children.push(item)
}

export function createDummyProject (project) {
    projects.push(project)
    return projects
}

export function getDummyProjects () {
    return projects
}

export function getDummyProject(projectID) {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === projectID) {
            return projects[i]
        }
    }
}

export var projects = [
    {
        id: "bb1",
        title: "Project 1",
        children: [
            {
                id: "bb1",
                code: "Building Block 1",
                title: "Building Block 1",        
                type: "buildingBlock",
                children: [
                    {
                        id: "ci1",
                        code: "Cost Item 1",
                        title: "Cost Item 1",                
                        type: "costItem",
                        children: [
                            {
                                id: "r1",
                                code: "Resource 1",
                                title: "Resource 1",
                                cost: 1000,
                                units: 1,                        
                                type: "resource"
                            },
                            {
                                id: "r1",
                                code: "Resource 2",
                                title: "Resource 2",
                                cost: 2000,
                                units: 2,                        
                                type: "resource"
                            }
                        ]
                    },
                    {
                        id: "ci1",
                        code: "Cost Item 2",
                        title: "Cost Item 2",                
                        type: "costItem",
                        children: [
                            {
                                id: "r1",
                                code: "Resource 1",
                                title: "Resource 1",
                                cost: 500,
                                units: 3,                        
                                type: "resource"
                            },
                            {
                                id: "r1",
                                code: "Resource 2",
                                title: "Resource 2",
                                cost: 4000,
                                units: 1,                        
                                type: "resource"
                            },
                            {
                                id: "r1",
                                code: "Resource 3",
                                title: "Resource 3",
                                cost: 100,
                                units: 11,                      
                                type: "resource"
                            }
                        ]
                    },
                    {
                        id: "ci1",
                        code: "Cost Item 3",
                        title: "Cost Item 3",                
                        type: "costItem",
                        children: [
                            {
                                id: "r1",
                                code: "Resource 1",
                                title: "Resource 1",
                                cost: 200,
                                units: 15,                        
                                type: "resource"
                            },
                            {
                                id: "r1",
                                code: "Resource 1",
                                title: "Resource 1",
                                cost: 70,
                                units: 3,                        
                                type: "resource"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "bb2",
        title: "Project 2",
        children: [
            {
                id: "bb1",
                code: "Building Block 2",
                title: "Building Block 2",        
                type: "buildingBlock",
                children: [
                    {
                        id: "ci1",
                        code: "Cost Item 1",
                        title: "Cost Item 1",                
                        type: "costItem",
                        children: [
                            {
                                id: "r1",
                                code: "Resource 1",
                                title: "Resource 1",
                                cost: 1500,
                                units: 1,                        
                                type: "resource"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]