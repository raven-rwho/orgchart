import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  if (dateString == null || dateString == undefined) {
    dateString="2023-02-08T15:17:46+01:00";
  }

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormatter
