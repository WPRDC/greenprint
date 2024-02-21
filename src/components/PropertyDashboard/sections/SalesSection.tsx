import {
  APIMultiResult,
  DatastoreTable,
  PropertySaleTransaction,
} from "@/types";
import { Note } from "@/components/Typography";
import { Card } from "@/components/PropertyDashboard/Card";
import { InfoTooltip } from "@/components/Tooltip";
import { formatDollars } from "@/lib/util";
import { fetchMultipleParcelRecords } from "@/lib/api";

type SimpleSalesRecord = {
  date: string;
  price: number;
  type?: string;
};

export interface SalesSectionProps
  extends Partial<APIMultiResult<PropertySaleTransaction>> {
  parcelID: string;
  assessmentSales?: Partial<SimpleSalesRecord>[];
}

export async function SalesSection({
  parcelID,
  assessmentSales = [],
}: SalesSectionProps) {
  const sales = await fetchMultipleParcelRecords<PropertySaleTransaction>(
    parcelID,
    DatastoreTable.PropertySaleTransactions,
  );

  if (!sales) return null;
  const fields = sales.fields;
  const records = sales.records;

  const recordSales: SimpleSalesRecord[] = records.map((record) => ({
    date: record.SALEDATE,
    price: record.PRICE,
    type: record.SALEDESC,
  }));

  // create add any sales from assessment data that are missing in sales data
  const saleDates = new Set(recordSales.map((sale) => sale.date));
  for (const sale of assessmentSales) {
    if (!!sale.date && !!sale.price && !saleDates.has(sale.date)) {
      recordSales.push(sale as SimpleSalesRecord);
    }
  }
  return (
    <Card label="Property Sales">
      <div className="overflow-x-auto">
        {!recordSales.length && <Note>No transactions found</Note>}
        {!!recordSales.length && (
          <table className="text-sans w-full max-w-full table-auto overflow-x-hidden text-sm">
            <thead className="border-b-2 border-black font-sans">
              <tr>
                <th className="w-24">
                  Date <InfoTooltip info={"Date the sale occurred."} />
                </th>
                <th>
                  Price <InfoTooltip info={fields?.PRICE.info?.notes} />
                </th>
                <th>
                  Type
                  <InfoTooltip info={fields?.SALEDESC.info?.notes} />
                </th>
              </tr>
            </thead>
            <tbody>
              {recordSales
                .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
                .reverse()
                .map(({ date, price, type }) => (
                  <tr key={date} className="font-mono even:bg-stone-100">
                    <th className="pr-2 text-left font-sans">
                      {new Date(date).toLocaleDateString(undefined, {
                        timeZone: "UTC",
                      })}
                    </th>
                    <td className="min-w-12 pr-3 text-right">
                      {formatDollars(price)}
                    </td>
                    <td className="overflow-x-hidden truncate">
                      {type ?? <Note>not recorded</Note>}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </Card>
  );
}
