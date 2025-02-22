import * as React from "react";
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from "@fluentui/react";
import { TextField, DefaultButton } from "@fluentui/react";

// ✅ Define React Functional Component with Proper Type
const PaxAccountingControl: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [eventData, setEventData] = React.useState<{ flightNumber: string; origin: string; destination: string; eventType: string }>({
    flightNumber: "-",
    origin: "-",
    destination: "-",
    eventType: "Aircraft",
  });

  const columns: IColumn[] = [
    { key: "condition", name: "Condition", fieldName: "condition", minWidth: 150 },
    { key: "pax", name: "PAX", fieldName: "pax", minWidth: 50 },
    { key: "fa", name: "FA", fieldName: "fa", minWidth: 50 },
    { key: "pilot", name: "Pilot", fieldName: "pilot", minWidth: 50 },
    { key: "ground", name: "Ground", fieldName: "ground", minWidth: 50 },
  ];

  const paxConditions = [
    { condition: "Red (critical)", pax: "-", fa: "-", pilot: "-", ground: "-" },
    { condition: "Yellow (walking wounded)", pax: "-", fa: "-", pilot: "-", ground: "-" },
    { condition: "Green (uninjured)", pax: "-", fa: "-", pilot: "-", ground: "-" },
    { condition: "Black (deceased)", pax: "-", fa: "-", pilot: "-", ground: "-" },
    { condition: "Unknown", pax: "-", fa: "-", pilot: "-", ground: "-" },
    { condition: "Total", pax: "-", fa: "-", pilot: "-", ground: "-" },
  ];

  return (
    <div style={{ padding: "10px", fontFamily: "Segoe UI" }}>
      <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
        <h3>Event Summary</h3>
        <div>
          <span>Flight #: {isEditing ? <TextField value={eventData.flightNumber} /> : eventData.flightNumber}</span>
          <span> | Origin: {isEditing ? <TextField value={eventData.origin} /> : eventData.origin}</span>
          <span> | Destination: {isEditing ? <TextField value={eventData.destination} /> : eventData.destination}</span>
          <span> | Event Type: {eventData.eventType}</span>
        </div>
        <DefaultButton text={isEditing ? "Save" : "Edit"} onClick={() => setIsEditing(!isEditing)} />
      </div>

      <div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
        <h3>PAX Accounting</h3>
        <DetailsList
          items={paxConditions}
          columns={columns}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          selectionMode={SelectionMode.none}
        />
      </div>
    </div>
  );
};

export default PaxAccountingControl;