import { PrebuiltGraphItem } from './types';

export const prebuilt_graph: PrebuiltGraphItem[] = [
  {
    name: 'join_room',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'agora-flow-value-converter-condition-tester',
        },
        prop: {
          rule: {
            appId: '$.appId',
            role: '$.role',
            'room.name': '$.roomName',
            'room.type': '$.roomType',
            'room.uuid': '$.roomUuid',
            'user.name': '$.userName',
            'user.uuid': '$.userUuid',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester-join-controller',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester-join-controller',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              role: {
                type: 'integer',
              },
              room: {
                type: 'object',
                properties: {
                  uuid: {
                    type: 'string',
                  },
                  name: {
                    type: 'string',
                  },
                  type: {
                    type: 'integer',
                  },
                },
                required: ['uuid', 'name', 'type'],
              },
              user: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  uuid: {
                    type: 'string',
                  },
                },
                required: ['name', 'uuid'],
              },
            },
            required: ['appId', 'role', 'room', 'user'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-join-controller',
                  name: 'agora-action-join-controller',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-join-controller',
          name: 'agora-action-join-controller',
        },
        prop: {
          nextAction: {
            'agora-action-join-controller': 'Prepare',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-netless-whiteboard',
                  name: 'agora-action-netless-whiteboard',
                },
              },
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-event',
                  name: 'agora-action-classroom-event',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-classroom-event',
          name: 'agora-action-classroom-event',
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester-record-start-trigger-event',
                },
              },
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester-record-stop-trigger-event',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester-record-start-trigger-event',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              cmd: {
                type: 'integer',
                const: 20,
              },
              data: {
                type: 'object',
                properties: {
                  onlineUsers: {
                    type: 'array',
                    minimum: 2,
                  },
                },
                required: ['onlineUsers'],
              },
            },
            required: ['cmd', 'data'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-trigger-event',
                  name: 'agora-trigger-event-record-start',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-trigger-event',
          name: 'agora-trigger-event-record-start',
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-recorder',
                  name: 'agora-action-classroom-recorder',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester-record-stop-trigger-event',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              cmd: {
                type: 'integer',
                const: 1,
              },
              data: {
                type: 'object',
                properties: {
                  state: {
                    type: 'integer',
                    enum: [2, 3],
                  },
                },
                required: ['state'],
              },
            },
            required: ['cmd', 'data'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-trigger-event',
                  name: 'agora-trigger-event-record-stop',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-trigger-event',
          name: 'agora-trigger-event-record-stop',
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-recorder',
                  name: 'agora-action-classroom-recorder-stop',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-classroom-recorder',
          name: 'agora-action-classroom-recorder-stop',
        },
        prop: {
          nextAction: {
            'agora-action-classroom-recorder-stop': 'Stop',
          },
        },
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-netless-whiteboard',
          name: 'agora-action-netless-whiteboard',
        },
        prop: {
          nextAction: {
            'agora-action-netless-whiteboard': 'Prepare',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-chatroom',
                  name: 'agora-action-chatroom',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-chatroom',
          name: 'agora-action-chatroom',
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-join-controller',
                  name: 'agora-action-join-controller-1',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-join-controller',
          name: 'agora-action-join-controller-1',
        },
        prop: {
          nextAction: {
            'agora-action-join-controller-1': 'Join',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-response-resolver',
                  name: 'agora-flow-response-resolver',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-response-resolver',
          name: 'agora-flow-response-resolver',
        },
        prop: {
          rule: {
            roomName: '$.data.roomName',
            state: '$.data.state',
            recordState: '$.data.recordState',
            muteChat: '$.data.muteChat',
            duration: '$.data.duration',
            closeDelay: '$.data.closeDelay',
            rtcRegion: '$.data.rtcRegion',
            rtmRegion: '$.data.rtmRegion',
            rtcMode: '$.data.rtcMode',
          },
        },
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'agora-flow-value-converter-cloud-record',
        },
        prop: {
          rule: {
            appId: '$.appId',
            mode: '$.mode',
            roomUuid: '$.roomUuid',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester-cloud-record',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester-cloud-record',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              mode: {
                type: 'string',
              },
            },
            required: ['appId', 'roomUuid', 'mode'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-recorder',
                  name: 'agora-action-classroom-recorder',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-trigger-schedule',
          name: 'agora-trigger-schedule-tester',
        },
      },
    ],
  },
  {
    name: 'carousels',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'state',
        },
        prop: {
          rule: {
            appId: '$.appId',
            roomUuid: '$.roomUuid',
            userUuid: '$.userUuid',
            state: '$.state',
            range: '$.range',
            type: '$.type',
            interval: '$.interval',
            count: '$.count',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              userUuid: {
                type: 'string',
              },
              state: {
                type: 'integer',
                enum: [0, 1],
              },
              range: {
                type: 'integer',
              },
              type: {
                type: 'integer',
              },
              interval: {
                type: 'integer',
              },
              count: {
                type: 'integer',
              },
            },
            required: ['appId', 'roomUuid', 'userUuid', 'state'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-carousels-controller',
                  name: 'agora-action-carousels-controller',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-carousels-controller',
          name: 'agora-action-carousels-controller',
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-event',
                  name: 'agora-action-classroom-event',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-classroom-event',
          name: 'agora-action-classroom-event',
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-carousels-controller',
                  name: 'agora-action-carousels-controller',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'screen_share',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'state',
        },
        prop: {
          rule: {
            appId: '$.appId',
            roomUuid: '$.roomUuid',
            userUuid: '$.userUuid',
            state: '$.state',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              userUuid: {
                type: 'string',
              },
              state: {
                type: 'integer',
                enum: [0, 1],
              },
            },
            required: ['appId', 'roomUuid', 'userUuid', 'state'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-screen-share-controller',
                  name: 'agora-action-screen-share-controller',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'reward',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'agora-flow-value-converter-condition-tester',
        },
        prop: {
          rule: {
            appId: '$.appId',
            roomUuid: '$.roomUuid',
            userUuid: '$.userUuid',
            changeReward: '$.changeReward',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              userUuid: {
                type: 'string',
              },
              changeReward: {
                type: 'integer',
              },
            },
            required: ['appId', 'roomUuid', 'userUuid', 'changeReward'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-reward-controller',
                  name: 'agora-action-reward-controller',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'device',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'agora-flow-value-converter',
        },
        prop: {
          rule: {
            appId: '$.appId',
            roomUuid: '$.roomUuid',
            userUuid: '$.userUuid',
            camera: '$.camera',
            mic: '$.mic',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              userUuid: {
                type: 'string',
              },
              camera: {
                type: 'integer',
                enum: [0, 1, 2],
              },
              mic: {
                type: 'integer',
                enum: [0, 1, 2],
              },
            },
            required: ['appId', 'roomUuid', 'userUuid'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-device-controller',
                  name: 'agora-action-classroom-device-controller',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-classroom-device-controller',
          name: 'agora-action-classroom-device-controller',
        },
      },
    ],
  },
  {
    name: 'kick',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'agora-flow-value-converter-condition-tester',
        },
        prop: {
          rule: {
            appId: '$.appId',
            roomUuid: '$.roomUuid',
            userUuid: '$.userUuid',
            state: '$.state',
            duration: '$.duration',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              userUuid: {
                type: 'string',
              },
              state: {
                type: 'integer',
                enum: [0, 1],
              },
              duration: {
                type: 'integer',
              },
            },
            required: ['appId', 'roomUuid', 'userUuid', 'state'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-user-controller',
                  name: 'agora-action-user-controller',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-user-controller',
          name: 'agora-action-user-controller',
        },
        prop: {
          nextAction: {
            'agora-action-user-controller': 'Kick',
          },
        },
      },
    ],
  },
  {
    name: 'classroom_state',
    auto_start: true,
    graph: [
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-value-converter',
          name: 'agora-flow-value-converter-condition-tester',
        },
        prop: {
          rule: {
            appId: '$.appId',
            roomUuid: '$.roomUuid',
            userUuid: '$.userUuid',
            state: '$.state',
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-flow-condition-tester',
                  name: 'agora-flow-condition-tester',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-flow-condition-tester',
          name: 'agora-flow-condition-tester',
        },
        prop: {
          type: 'params-validation',
          mode: 'json-schema',
          rule: {
            $schema: 'http://json-schema.org/draft-04/schema#',
            type: 'object',
            properties: {
              appId: {
                type: 'string',
              },
              roomUuid: {
                type: 'string',
              },
              userUuid: {
                type: 'string',
              },
              state: {
                type: 'integer',
                enum: [0, 1, 2],
              },
            },
            required: ['appId', 'roomUuid', 'userUuid', 'state'],
          },
        },
        cmd: [
          {
            command: 'next',
            dest: [
              {
                extension_group: {
                  addon: 'default_extension_group',
                  name: 'default_extension_group',
                },
                extension: {
                  addon: 'agora-action-classroom-state-controller',
                  name: 'agora-action-classroom-state-controller',
                },
              },
            ],
          },
        ],
      },
      {
        extension_group: {
          addon: 'default_extension_group',
          name: 'default_extension_group',
        },
        extension: {
          addon: 'agora-action-classroom-state-controller',
          name: 'agora-action-classroom-state-controller',
        },
      },
    ],
  },
];
