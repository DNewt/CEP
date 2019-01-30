export function getTreeCost(node) {
    var cost = 0
    if (node.cost && node.units > 0) {
        cost = node.cost * node.units
    }

    if (!node.children || node.children.length === 0) { 
        return cost;
    } else {
        for (var i = 0; i < node.children.length; i++) {
            cost += getTreeCost(node.children[i])
        }
        return cost;
    }
}

export function getTreeReport(node, depth) {
    var report = "\t".repeat(depth) + node.code
    if (node.cost && node.units > 0) {
        report += ` - $${node.cost * node.units}`
    }
    report += "\n"

    if (!node.children || node.children.length === 0) { 
        return report;
    } else {
        for (var i = 0; i < node.children.length; i++) {
            report += getTreeReport(node.children[i], depth+1)
        }
        return report;
    }
}