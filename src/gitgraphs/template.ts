import 'gitgraph.js'

const myTemplate = new GitGraph.Template({
    colors: ['#458588', '#d65d0e', '#98971a', '#b16286', '#d79921'],
    branch: {
        lineWidth: 2,
        mergeStyle: 'bezier'
    },
    commit: {
        spacingY: -30,
        dot: {
            size: 5
        },
        message: {
            displayAuthor: false,
            displayBranch: true,
            displayHash: false,
            font: 'normal 14pt Arial'
        },
        shouldDisplayTooltipsInCompactMode: true
    }
});

export const create = (elementId: string) => {
    return new GitGraph({
        elementId: elementId,
        template: myTemplate,
        orientation: 'vertical-reverse'
    });
};