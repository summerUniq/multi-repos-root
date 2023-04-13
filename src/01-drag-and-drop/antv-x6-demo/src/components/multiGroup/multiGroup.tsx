import React, { useEffect, useRef } from 'react';
import { Graph, Model } from '@antv/x6';
import { prebuilt_graph } from './data';
import { createGroup, createNode, getExtensionId } from './create';
import Group from './Group';
import { DagreLayout } from '@antv/layout';
import './multiGroup.css';

const MultiGroup = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const groupX: number = 80;
  const groupY: number = 80;
  const groupH: number = 1000;
  const groupW: number = 1000;
  const extensionWidth: number = 300;
  const extensionHight: number = 40;
  useEffect(() => {
    if (containerRef.current) {
      const graph = new Graph({
        container: containerRef.current,
        grid: true,
        embedding: {
          enabled: true,
        },
        // scroller: {
        //   enabled: true,
        //   pageVisible: true,
        //   pageBreak: true,
        //   pannable: true,
        // },
        // mousewheel: {
        //   enabled: true,
        //   modifiers: ['ctrl', 'meta'],
        //   minScale: 0.5,
        //   maxScale: 2,
        // },
        highlighting: {
          embedding: {
            name: 'stroke',
            args: {
              padding: -1,
              attrs: {
                stroke: '#73d13d',
              },
            },
          },
        },
        panning: true,
        autoResize: true,
        resizing: {
          enabled: false,
        },
        translating: {
          restrict: true,
        },
        selecting: true,
      });

      graph.on('node:collapse', ({ node }: { node: Group }) => {
        node.toggleCollapse();
        const collapsed = node.isCollapsed();
        const collapse = (parent: Group) => {
          const cells = parent.getChildren();
          if (cells) {
            cells.forEach((cell) => {
              if (collapsed) {
                cell.hide();
              } else {
                cell.show();
              }

              if (cell instanceof Group) {
                if (!cell.isCollapsed()) {
                  collapse(cell);
                }
              }
            });
          }
        };

        collapse(node);
      });

      const groups = prebuilt_graph.map((v, idx) => {
        const { name, graph: propertyGraph } = v;
        const x = groupX;
        const y = groupH * idx + groupY;

        const group = createGroup(
          name,
          x,
          y,
          groupW,
          groupH,
          '#fffbe6',
          '#ffe7ba',
          graph
        );

        // const data: Model.FromJSONData = {
        //   nodes: [],
        //   edges: [],
        // };

        // const dagreLayout = new DagreLayout({
        //   type: 'dagre',
        //   rankdir: 'LR',
        //   align: 'UR',
        //   ranksep: 35,
        //   nodesep: 15,
        // });

        propertyGraph.forEach((graphItem, index) => {
          const id = getExtensionId(graphItem, name);
          let x = group.getPosition().x + index * extensionWidth;
          let y = group.getPosition().y + 100;
          if (x + extensionWidth > group.getPosition().x + groupW) {
            x = group.getPosition().x;
            y = group.getPosition().x + extensionHight + 50;
          }
          const node = createNode(
            id,
            x,
            y,
            extensionWidth,
            extensionHight,
            '#5f95ff',
            graph
          );

          group.addChild(node);

          // data.nodes?.push(nodeMeta);
        });

        // const model = dagreLayout.layout(data as any);
        // graph.fromJSON(model);
      });

      const res = graph.toJSON();
      console.log('res', res);
    }
  }, [containerRef]);

  return <div id="container" ref={(ref) => (containerRef.current = ref)}></div>;
};

export default MultiGroup;
