import { Toast, Button } from "@openlab-ui/react";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { Page, Section } from "../Section";

function ToastViewport() {
  const { toasts } = BaseToast.useToastManager();
  return (
    <>
      {toasts.map((t) => (
        <Toast.Root key={t.id} toast={t}>
          <Toast.Title />
          <Toast.Description />
          <Toast.Close />
        </Toast.Root>
      ))}
    </>
  );
}

function ToastTriggers() {
  const toast = BaseToast.useToastManager();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: "Event created", description: "Monday, January 3rd at 6:00pm" })
        }
      >
        Show toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({ title: "Changes saved", description: "Your profile has been updated." })
        }
      >
        With description
      </Button>
    </div>
  );
}

export function ToastPage() {
  return (
    <Page
      title="Toast"
      description="Succinct messages that are displayed temporarily to give feedback about an operation."
    >
      <Section
        title="Interactive Demo"
        description="Click a button to show a toast notification."
        preview={
          <Toast.Provider>
            <ToastTriggers />
            <ToastViewport />
          </Toast.Provider>
        }
        code={`import { Toast, Button } from "@openlab-ui/react";
import { Toast as BaseToast } from "@base-ui/react/toast";

function ToastViewport() {
  const { toasts } = BaseToast.useToastManager();
  return (
    <>
      {toasts.map((t) => (
        <Toast.Root key={t.id} toast={t}>
          <Toast.Title />
          <Toast.Description />
          <Toast.Close />
        </Toast.Root>
      ))}
    </>
  );
}

// In your root component:
<Toast.Provider>
  <App />
  <ToastViewport />
</Toast.Provider>

// In any component:
function MyComponent() {
  const toast = BaseToast.useToastManager();
  return (
    <Button onClick={() => toast.add({ title: "Event created" })}>
      Show toast
    </Button>
  );
}`}
      />
    </Page>
  );
}
