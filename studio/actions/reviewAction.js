export function ReviewAction(props) {
  return {
    label: "In Review",
    onHandle: () => {
      // Here you can perform your actions
      window.alert("👋 Hello from custom action");
    }
  };
}
