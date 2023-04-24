import { useEffect } from 'react';
import useSWR from 'swr';

export interface StudentPropfileProps {
  StudentId: string
}

const StudentPropfile = ({StudentId}: StudentPropfileProps) => {
  const {data, error, mutate, isValidating} = useSWR(`/students/${StudentId}`, {
    revalidateOnFocus: false,
    
  });

  return (
    <div>
      {data?.name || 'Loading'}
    </div>
  )
}

export default StudentPropfile;