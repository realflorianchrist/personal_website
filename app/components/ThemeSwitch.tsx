'use client'
import {useEffect, useLayoutEffect, useState} from "react";
import {styled, Switch} from "@mui/material";
import {useTheme} from "next-themes";

export default function ThemeSwitch() {

    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    }

    const GreySwitch = styled(Switch)(() => ({
        '& .MuiSwitch-thumb': {
            backgroundColor: resolvedTheme === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: 'rgb(137, 137, 137)'
        },
        '& .MuiSwitch-track': {
            backgroundColor: 'rgb(137, 137, 137)'
        }
    }));

    if (!mounted) return <></>;

    return (
        <button className={'flex fixed bottom-8 left-8'}
                onClick={toggleTheme}>
            <GreySwitch
                checked={resolvedTheme === 'dark'}
                size={'small'}
            />
            <p className={'text-xs self-center pl-1'}>Lights on/off</p>
        </button>
    );
}