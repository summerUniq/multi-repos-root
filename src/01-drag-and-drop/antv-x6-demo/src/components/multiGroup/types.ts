/**
 *
 * Created by summer.xia in 2022-08-22 11:01:33
 *
 */

export interface GraphItem {
  extension_group: {
    addon: string;
    name: string;
  };
  extension: {
    addon: string;
    name: string;
  };
  prop?: Record<string, unknown>;
  cmd?: Array<{
    command: string;
    dest: Array<{
      extension_group: {
        addon: string;
        name: string;
      };
      extension: {
        addon: string;
        name: string;
      };
      cmd?: string[];
    }>;
  }>;
}

export interface PrebuiltGraphItem {
  name: string;
  auto_start: boolean;
  graph: GraphItem[];
}
