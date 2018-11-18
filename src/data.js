let resources = [
    {
        id: "1",
        code: "0001",
        type: "finance",
        description: "financial stuff is really cool",
        currency: "NZD",
        units: 1,
        cost: 5000,
        date: "2018-10-10",
        tpApprover: "Dave"
    },
    {
        id: "2",
        code: "0002",
        type: "finance",
        description: "financial stuff is really cool",
        currency: "NZD",
        units: 2,
        cost: 5000,
        date: "2018-10-10",
        tpApprover: "Dave"
    },
    {
        id: "3",
        code: "0003",
        type: "finance",
        description: "financial stuff is really cool",
        currency: "NZD",
        units: 1,
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

export function getDummyResources() {
    return new Promise((resolve, reject) => {
        resolve(resources)
    })
}

export function getDummyCostItems() {
    return new Promise((resolve, reject) => {
        resolve(cost_items)
    })
}

export function addDummyResource(resource) {
    return new Promise((resolve, reject) => {
        resources.push(resource)
        resolve(resources)
    })    
}

export function addDummyCostItem(costItem) {
    return new Promise((resolve, reject) => {
        cost_items.push(costItem)
        resolve(cost_items)
    })    
}