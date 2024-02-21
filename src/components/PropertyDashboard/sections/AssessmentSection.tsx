import { FieldRecord, PropertyAssessment } from "@/types";
import { FieldValues } from "@/components/FieldValues";
import { Table } from "@/components/Table";
import { Note } from "@/components/Typography";
import { Chip } from "@/components/Chip";
import { TbHomeHeart, TbLeaf, TbPigMoney } from "react-icons/tb";
import { GiFarmTractor } from "react-icons/gi";
import { Card } from "../Card";

export interface AssessmentSectionProps {
  fields: FieldRecord<PropertyAssessment>;
  record: PropertyAssessment;
}

export function AssessmentSection({ fields, record }: AssessmentSectionProps) {
  return (
    <div>
      <Card label="Subsidies">
        <div>
          {!!record.HOMESTEADFLAG && (
            <Chip
              label="Homestead"
              icon={TbHomeHeart}
              variant="active"
              info={fields.HOMESTEADFLAG.info?.notes}
              className="ml-1 inline-flex first:ml-0"
            />
          )}
          {!!record.FARMSTEADFLAG && (
            <Chip
              label="Farmstead"
              icon={GiFarmTractor}
              variant="active"
              info={fields.FARMSTEADFLAG.info?.notes}
              className="ml-1 inline-flex first:ml-0"
            />
          )}
          {!!record.CLEANGREEN && (
            <Chip
              label="Clean & Green"
              icon={TbLeaf}
              variant="active"
              info={fields.CLEANGREEN.info?.notes}
              className="ml-1 inline-flex first:ml-0"
            />
          )}
          {!!record.ABATEMENTFLAG && (
            <Chip
              label="Receives Abatement"
              icon={TbPigMoney}
              variant="active"
              info={fields.ABATEMENTFLAG.info?.notes}
              className="ml-1 inline-flex first:ml-0"
            />
          )}
          {!record.HOMESTEADFLAG &&
            !record.FARMSTEADFLAG &&
            !record.CLEANGREEN &&
            !record.ABATEMENTFLAG && <Note>None</Note>}
        </div>
      </Card>
      <Card>
        <Table<number>
          label="Assessed Values"
          columns={["Building", "Land", "Total"]}
          rows={["Local", "County", "Fair Market"]}
          data={[
            [record.LOCALBUILDING, record.LOCALLAND, record.LOCALTOTAL],
            [record.COUNTYBUILDING, record.COUNTYLAND, record.COUNTYTOTAL],
            [
              record.FAIRMARKETBUILDING,
              record.FAIRMARKETLAND,
              record.FAIRMARKETTOTAL,
            ],
          ]}
          format={(v) =>
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(v ?? 0)
          }
        />
      </Card>
      <Card>
        <FieldValues
          label="Dwelling Characteristics"
          emptyMessage="Not available for this parcel"
          items={[
            {
              id: "style",
              label: "Style",
              info: fields.STYLE.info?.notes,
              value: record.STYLEDESC,
            },
            {
              id: "yearblt",
              label: "Year Built",
              info: fields.YEARBLT.info?.notes,
              value: record.YEARBLT
                ? `${record.YEARBLT} (~${
                    new Date().getFullYear() - record.YEARBLT
                  } years)`
                : undefined,
            },
            {
              id: "stories",
              label: "Stories",
              info: fields.STORIES.info?.notes,
              value: record.STORIES,
            },
            {
              id: "roof",
              label: "Roof",
              info: fields.ROOF.info?.notes,
              value: record.ROOFDESC,
            },
            {
              id: "basement",
              label: "Basement",
              info: fields.BASEMENT.info?.notes,
              value: record.BASEMENTDESC,
            },
            {
              id: "heating-cooling",
              label: "Heating and Cooling",
              info: fields.HEATINGCOOLING.info?.label,
              value: record.HEATINGCOOLINGDESC,
            },
            {
              id: "extfinish",
              label: "Exterior Finish",
              info: fields.EXTFINISH_DESC.info?.notes,
              value: record.EXTFINISH_DESC,
            },

            {
              id: "finished-living-area",
              label: "Finish Living Area",
              info: fields.FINISHEDLIVINGAREA.info?.notes,
              value: record.FINISHEDLIVINGAREA,
            },

            {
              id: "total-rooms",
              label: "Rooms",
              info: fields.TOTALROOMS.info?.notes,
              value: record.TOTALROOMS,
            },
            {
              id: "bedrooms",
              label: "Bedrooms",
              info: fields.BEDROOMS.info?.notes,
              value: record.BEDROOMS,
            },
            {
              id: "full-baths",
              label: "Full Baths",
              info: fields.FULLBATHS.info?.notes,
              value: record.FULLBATHS,
            },
            {
              id: "half-baths",
              label: "Half Baths",
              info: fields.HALFBATHS.info?.notes,
              value: record.HALFBATHS,
            },
            {
              id: "fireplaces",
              label: "Fireplaces",
              info: fields.FIREPLACES.info?.notes,
              value: record.FIREPLACES,
            },
            {
              id: "basement-garage",
              label: "Integral Basement Garage",
              info: fields.BSMTGARAGE.info?.notes,
              value: record.BSMTGARAGE,
            },
          ]}
          variant="dense"
        />
      </Card>
      <Card label="Condition">
        <FieldValues
          variant="dense"
          emptyMessage="Not available for this parcel"
          items={[
            {
              id: "grade",
              label: "Grade",
              info: fields.GRADE.info?.notes,
              value: record.GRADEDESC,
            },
            {
              id: "condition",
              label: "Condition",
              info: fields.CONDITION.info?.notes,
              value: record.CONDITIONDESC,
            },
            {
              id: "cdu",
              label: "CDU",
              info: fields.CDU.info?.notes,
              value: record.CDUDESC,
            },
          ]}
        />
      </Card>
      <Card>
        <FieldValues
          items={[
            {
              id: "lot-area",
              label: fields.LOTAREA.info?.label,
              value: (
                <span>
                  {record?.LOTAREA} ft<sup>2</sup>
                </span>
              ),
            },
          ]}
        />
      </Card>

      <Card>
        <FieldValues
          label="Tax Context"
          items={[
            {
              id: "tax-municipality",
              label: "Municipality (Tax District)",
              value: `${record.MUNIDESC} (${record.MUNICODE})`,
            },
            {
              id: "tax-schooldesc",
              label: "School District",
              value: `${record.SCHOOLDESC} (${record.SCHOOLCODE})`,
            },
            {
              id: "val-neighborhood",
              label: "Valuation Neighborhood",
              value: `${record.NEIGHDESC} (${record.NEIGHCODE})`,
              info: "The ID number for the valuation neighborhood containing this parcel. Valuation neighborhoods were delineated as part of the 2013 reassessment. A valuation neighborhood is a geographic area exhibiting a high degree of homogeneity in economic amenities, land use, economic trends, and property characteristics such as quality, age, and condition.",
            },
            {
              id: "tax-status",
              label: "Tax Status",
              value: `${record.TAXDESC}`,
              info: "Tax Status indicates whether or not real estate taxes apply to a parcel's assessment. Parcels may be Taxable (must pay local taxes), Exempt (pay no taxes), or PURTA [Public Utility Realty Tax Act (if taxes are paid, they are paid into a state fund rather than to local taxing bodies)].",
            },
            {
              id: "tax-subcode",
              label: "Tax Sub Code",
              value: `${record.TAXSUBCODE_DESC ?? "N/A"}`,
              info: fields.TAXSUBCODE.info?.notes,
            },
            {
              id: "class",
              label: "Class",
              value: record?.CLASSDESC,
              info: "Broad self-explanatory categories for describing the general use of a parcel.",
            },
            {
              id: "use",
              label: "Use",
              value: record?.USEDESC,
              info: "More detailed than class, these categories further describe the primary use of the parcel. There are about 200 self-explanatory categories.",
            },
          ]}
          variant="dense"
        />
      </Card>
    </div>
  );
}
