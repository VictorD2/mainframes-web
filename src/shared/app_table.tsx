// Elements
import { AppEmpty } from './app_empty'
import { AppLoading } from './app_loading.'

// Types
type AppTableProps = {
  columns: Array<string>
  rows: any
  count: number
  selectable?: boolean
  loading: boolean
  heightLoading?: string
  emptyMessage?: string
}

export const AppTable = ({ columns, rows, count, emptyMessage = 'no records', selectable = false, loading, heightLoading = 'h-64' }: AppTableProps) => {
  return (
    <div className="w-24 min-w-full relative">
      <div className="scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-100 overflow-x-scroll relative">
        <table className="rounded-b-md min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-500">
            <tr>
              {selectable && (
                <th scope="col" className="px-6 py-3 border-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    className="after:content-['✔'] text-white flex justify-center form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 my-1 align-center bg-no-repeat bg-center bg-contain cursor-pointer"
                    type="checkbox"
                    id="flexCheckDefault3"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th key={column} scope="col" className="px-6 border-2 py-3 ltr:text-left rtl:text-right text-xs font-medium text-white uppercase tracking-wider">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 tablaDatos">{count > 0 && rows}</tbody>
        </table>
        {count === 0 && loading && <AppEmpty message={emptyMessage} />}
      </div>
      {!loading && <AppLoading height={heightLoading} />}
    </div>
  )
}
