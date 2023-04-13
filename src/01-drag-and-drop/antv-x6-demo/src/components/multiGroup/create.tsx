/**
 *
 * Created by summer.xia in 2022-08-22 10:56:34
 *
 */

import { Edge, Graph, Node } from '@antv/x6';
import Group from './Group';
import { GraphItem } from './types';

export function createGroup(
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  stroke: string,
  graph: Graph
): Group {
  const group = new Group({
    id,
    x,
    y,
    width,
    height,
    attrs: {
      body: { fill, stroke },
      label: { text: id },
    },
  });
  graph.addNode(group);
  return group;
}

export function createNode(
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  fill: string,
  graph: Graph
): Node {
  const arr = id.split('&');
  const label = arr.slice(-1)[0].split(':')[1];
  return graph.addNode({
    id,
    x,
    y,
    width,
    height,
    attrs: {
      body: {
        fill: '#5F95FF',
        stroke: 'transparent',
      },
      label: {
        fill: '#ffffff',
        fontSize: 12,
        text: label,
      },
    },
  });
}

export function createEdge(
  id: string,
  source: string,
  target: string,
  graph: Graph
): Edge {
  return graph.addEdge({
    id,
    source,
    target,
    label: id,
    attrs: {
      label: {
        fontSize: 12,
      },
    },
  });
}

export function getExtensionId(graphItem: GraphItem, graphId: string): string {
  const { extension, extension_group } = graphItem;
  return `${graphId}&${extension_group.addon}:${extension_group.name}&${extension.addon}:${extension.name}`;
}
