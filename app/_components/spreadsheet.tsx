"use client";
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet-ce/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet-ce/dist/jspreadsheet.css";
import { Customer } from "@prisma/client";

interface SpreadsheetAppProps {
  data: Customer[];
}

export default function SpreadsheetApp({ data }: SpreadsheetAppProps) {
  // Spreadsheet array of worksheets
  const spreadsheet = useRef();
  console.log(data);

  const columns = [
    { title: "ID", field: "id" },
    { title: "Nome", field: "name" },
    { title: "Telefone", field: "phone" },
  ];

  // Render component
  return (
    <>
      <Spreadsheet tabs={true} toolbar={true} ref={spreadsheet}>
        <Worksheet
          data={data.map((item) => {
            return {
              id: item.id,
              name: item.name,
              phone: item.phone,
            };
          })}
          columns={columns}
        />
      </Spreadsheet>
    </>
  );
}
