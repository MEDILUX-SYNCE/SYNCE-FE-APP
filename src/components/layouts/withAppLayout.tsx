import AppLayout from './AppLayout';

// 모든 화면을 전역처럼 감쌀 수 있게 해주는 함수
export function withAppLayout<T extends {}>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: T) {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  };
}
