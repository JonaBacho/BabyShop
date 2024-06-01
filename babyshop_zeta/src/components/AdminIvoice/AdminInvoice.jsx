import React, { useState } from 'react';

const AdminInvoice = ({ invoices, onInvoiceStatusUpdate }) => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [editedInvoices, setEditedInvoices] = useState({}); // State to track edited invoices

  const handleInvoiceSelect = (invoiceId) => {
    setSelectedInvoiceId(invoiceId);
  };

  const handleStatusChange = (invoiceId, newStatus) => {
    // Validate if newStatus is a valid option: "Approved", "Declined", or "Pending"
    if (!['Approved', 'Declined', 'Pending'].includes(newStatus)) {
      console.error('Invalid status update attempted');
      return;
    }

    // Update editedInvoices state with the new status
    setEditedInvoices({
      ...editedInvoices,
      [invoiceId]: newStatus,
    });

    // Update selected invoice state
    setSelectedInvoiceId(invoiceId);

    // Call the provided onInvoiceStatusUpdate function to handle the update logic
    onInvoiceStatusUpdate(invoiceId, newStatus);
  };

  const getInvoiceStatus = (invoiceId) => {
    // Check if the invoice is edited and return the edited status
    if (editedInvoices[invoiceId]) {
      return editedInvoices[invoiceId];
    }
    // Otherwise return the original invoice status
    return invoices.find((invoice) => invoice.id === invoiceId)?.status;
  };

  return (
    <div className="admin-invoice container mx-7 widgetLg">
      <h3 className="widgetLgTitle">Latest Invoices</h3>
      <div className="invoice-list">
        <table className="widgetLgTable">
          <thead>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Avatar</th>
              <th className="widgetLgTh">Amount Paid</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr
                key={invoice.id}
                className={selectedInvoiceId === invoice.id ? 'active' : ''}
                onClick={() => handleInvoiceSelect(invoice.id)}
              >
                <td className="widgetLgName">{invoice.customerName}</td>
                <td>
                  <img
                    src={invoice.avatar}
                    alt="Avatar"
                    className="widgetLgImg"
                    style={{ width: '50px' }}
                  />
                </td>
                <td className="widgetLgAmount">${invoice.amountPaid}</td>
                <td className="widgetLgDate">{invoice.date}</td>
                <td className="widgetLgStatus">
                  {invoice.status !== 'Approved' && (
                    <select
                      value={getInvoiceStatus(invoice.id)}  // Use getInvoiceStatus to get the displayed value
                      onChange={(e) =>
                        handleStatusChange(invoice.id, e.target.value)
                      }
                      disabled={invoice.status === 'Approved'}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Declined">Declined</option>
                    </select>
                  )}
                  {invoice.status === 'Approved' && <span>{invoice.status}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInvoice;
