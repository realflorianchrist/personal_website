import { formatDate } from '@/utils/dateFormatter';
import { useEffect, useState } from 'react';

export const useDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000 * 20);
        return () => clearInterval(interval);
    }, []);

    return formatDate(date);
};