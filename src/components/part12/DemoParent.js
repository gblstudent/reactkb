import DemoChild from "./DemoChild";

export default function DemoParent() {
    
    return (
    <div>
        Hello World - Parent Component<br/> 
        <button >Parent Button</button>
        <hr/>
        <DemoChild/>
    </div>
    
  );
}
