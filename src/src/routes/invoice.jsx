import { useParams } from "react-router-dom";
import { getInvoice } from "../../data";

//function that defines behavior for when to a particular invoice is called upon
export default function Invoice() {
  //the param to look up an invoice and display more information
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}