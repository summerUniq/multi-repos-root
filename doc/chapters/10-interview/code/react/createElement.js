function createElement(type, config, ...children) {
    if (config) {
        delete config._self
        delete config._source
    }

    const props = {
        ...config,
        children: children.map((v) => typeof v === 'object' ? v : createTextNode(v))
    }

    return {
        type,
        props
    }
}

function createTextNode(text) {
    return {
        type: TEXT,
        props: {
            children: [],
            nodeValue: text
        }
    }
}

export default createElement