import { TestNavigationPane } from "@/components/TestNavigationPane";

function EmptyTestPage() {
  return (
    <div>
      <TestNavigationPane />
      <p>This is an empty test page on {location.href}</p>
    </div>
  );
}

export { EmptyTestPage };
