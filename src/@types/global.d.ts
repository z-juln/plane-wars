declare module '*.css' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.scss' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.sass' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.svg';

declare module '*.png';

declare module '*.jpg';

declare module '*.jpeg';

declare module '*.gif';

declare module '*.md' {
  const content: string;
  export default content;
}

interface Window {
}

export interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface Response<Data = any> {
  code: number;
  data: Data;
  msg: string;
  succeed: boolean;
}
