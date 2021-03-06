import { Link } from "@remix-run/react";
import type PaginationDto from "~/models/pagination-dto.model";

const PageLink = (
  { text, to, disabled }: 
  { text: 'Next' | 'Previous'; to: string; disabled: boolean }
) => {
  return (
    <li>
      {
        disabled ? (
          <span 
            className="inline-block bg-color-background rounded p-dimen-xs"
          >
            { text }
          </span>
        ) : (
          <Link 
            to={to} 
            className="inline-block bg-color-primary-variant rounded p-dimen-xs hover:bg-color-primary"
          >
            { text }
          </Link>
        )
      }
    </li>
  );
}

export default function PaginationItemComponent(
  { pagination, span = 10 }: 
  { pagination: PaginationDto, span?: number }
) {
  return (
    <tfoot>
      <tr>
        <td colSpan={span}>
          <ul className="flex gap-dimen-sm justify-center items-center py-dimen-lg px-dimen-sm">
            <PageLink 
              text="Previous" 
              to={`?page=${pagination.previousPage}`} 
              disabled={pagination.previousPage === null} 
            />

            <PageLink 
              text="Next" 
              to={`?page=${pagination.nextPage}`} 
              disabled={pagination.nextPage === null} 
            />
          </ul>
        </td>
      </tr>
    </tfoot>
  );
}
