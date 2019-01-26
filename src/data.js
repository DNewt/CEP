let resources = [
    {
        id: "1",
        title: "FN01",
        type: "Finance",
        description: "financial stuff is really cool",
        currency: "NZD",
        units: 1,
        cost: 5000,
        date: "2018-10-12",
        tpApprover: "Dave"
    },
    {
        id: "2",
        title: "FN02",
        type: "Finance",
        description: "financial stuff is really cool",
        currency: "AUD",
        units: 3,
        cost: 4000,
        date: "2018-10-15",
        tpApprover: "Jake"
    },
    {
        id: "3",
        title: "FN03",
        type: "Finance",
        description: "financial stuff is really cool",
        currency: "USD",
        units: 2,
        cost: 5000,
        date: "2018-10-10",
        tpApprover: "Dave"
    },
]

let cost_items = []
let block_items = []

export function getItems(projectID) {
    var project = getProject(projectID)
    return project.children
}

export function addItem(item, projectID) {
    var project = getProject(projectID)
    project.children.push(item)
}

export function createProject (project) {
    projects.push(project)
}

export function getProjects () {
    return projects
}

export function getProject(projectID) {
    console.log(projectID)
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === projectID) {
            return projects[i]
        }
    }
}

export var projects = [
    {
        id: "bb1",
        name: "Project 1",
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
        name: "Project 2",
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

export function getDummyResources() {
    return new Promise((resolve, reject) => {
        resolve(resources)
    })
}

export function getDummyResource(id) {
    console.log(id)
    for (var i = 0; i < resources.length; i++) {
        if (resources[i].id === id) {
            return resources[i]
        }
    }
    return {}
}

export function getDummyCostItems() {
    return new Promise((resolve, reject) => {
        var new_cost_items = JSON.parse(JSON.stringify(cost_items));
        for (var i = 0; i < cost_items.length; i++) {
            new_cost_items[i].resources = []
            for (var j = 0; j < cost_items[i].resources.length; j++) {
                var resource = getDummyResource(cost_items[i].resources[j])
                new_cost_items[i].resources.push(resource)
            }
        }
        resolve(new_cost_items)
    })
}

export function getDummyResourceOptions () {
    var options = []
    for (var i = 0; i < resources.length; i++) {
        options.push({label: resources[i].code, value: resources[i].id})
    }
    return options
}

export function addDummyResource(resource) {
    return new Promise((resolve, reject) => {
        resources.push(resource)
        resolve(resources)
    })    
}

export function addDummyCostItem(costItem) {
    console.log(costItem)
    return new Promise((resolve, reject) => {
        cost_items.push(costItem)
        resolve(cost_items)
    })    
}

// BUILDING BLOCKS

export function getDummyCostItem(id) {
    console.log(id)
    for (var i = 0; i < cost_items.length; i++) {
        if (cost_items[i].id === id) {
            return cost_items[i]
        }
    }
    return {}
}

export function getDummyBuildingBlocks() {
    return new Promise((resolve, reject) => {
        var new_building_blocks = JSON.parse(JSON.stringify(block_items));
        for (var i = 0; i < block_items.length; i++) {
            new_building_blocks[i].costItems = []
            for (var j = 0; j < block_items[i].costItems.length; j++) {
                var costItem = getDummyCostItem(block_items[i].costItems[j])
                new_building_blocks[i].costItems.push(costItem)
            }
        }
        resolve(new_building_blocks)
    })
}

export function getDummyCostItemOptions () {
    var options = []
    for (var i = 0; i < cost_items.length; i++) {
        options.push({label: cost_items[i].code, value: cost_items[i].id})
    }
    return options
}

export function addDummyBuildingBlock(buildingBlock) {
    console.log(buildingBlock)
    return new Promise((resolve, reject) => {
        block_items.push(buildingBlock)
        resolve(block_items)
    })    
}