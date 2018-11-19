let resources = [
    {
        id: "1",
        code: "FN01",
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
        code: "FN02",
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
        code: "FN03",
        type: "Finance",
        description: "financial stuff is really cool",
        currency: "USD",
        units: 2,
        cost: 5000,
        date: "2018-10-10",
        tpApprover: "Dave"
    },
]

let cost_items = [
    { 
        id: "1", 
        code: "0001", 
        description: "Circuit Breaker", 
        unit: "?", 
        date: "2018-10-10", 
        tpApprover: "Dave", 
        resources: ["2", "3"]
    },
    { 
        id: "2", 
        code: "0002", 
        description: "CAT6 40m Cable", 
        unit: "m", 
        date: "2018-10-14", 
        tpApprover: "Dave", 
        resources: ["1"]
    }
]

let block_items = [
    { 
        id: "1", 
        code: "0001", 
        description: "Circuit Breaker", 
        date: "2018-10-10", 
        tpApprover: "Dave", 
        costItems: ["1", "2"]
    },
    { 
        id: "2", 
        code: "0002", 
        description: "CAT6 40m Cable", 
        date: "2018-10-14", 
        tpApprover: "Dave", 
        costItems: ["1"]
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