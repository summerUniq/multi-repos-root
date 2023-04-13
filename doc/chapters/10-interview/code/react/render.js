function render(vnode, container) {
    const node = createNode(vnode, container)
    container.appendChild(node)
}

// vnode ===> node
function createNode(vnode, parentNode) {
    const { type, props } = vnode
    let node = null
    if (type === TEXT) {
        node = document.createTextNode('')
    } else if (typeof type === 'string') {
        node = document.createElement(type)
    } else if (typeof type === 'function') {
        node = type.isReactComponent ? updateClassComponent(vnode, parentNode) : updateFunctionComponent(vnode, parentNode)
    } else {
        node = document.createDocumentFragment()
    }
    reconcileChildren(props.children, node);
    updateNode(node, props)
    return node
}

function reconcileChildren(children, node) {
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        if (Array.isArray(child)) {
            for (let j = 0; j < child.length; j++) {
                render(child[j], node);
            }
        } else {
            render(child, node);
        }
    }
}

function updateClassComponent(vnode, parentNode) {
    const { type, props } = vnode
    const vvnode = new type(props)
    const node = createNode(vvnode, parentNode)
    return node
}

function updateFunctionComponent(vnode, parentNode) {
    const { type, props } = vnode
    const vvnode = type(props)
    const node = createNode(vvnode, parentNode)
    return node
}

function updateNode(node, props) {
    Object.keys(props)
        .filter(k => k !== "children")
        .forEach(k => {
            if (k.slice(0, 2) === "on") {
                let eventName = k.slice(2).toLocaleLowerCase();
                node.addEventListener(eventName, props[k]);
            } else {
                node[k] = props[k];
            }
        });
}