'use client'
import {useLayoutEffect, useState} from "react";
import {Switch} from "@mui/material";
import {grey} from '@mui/material/colors';
import {styled} from "@mui/system";

export default function ThemeSwitch() {

    useLayoutEffect(() => {
        let preferredTheme;
        if (localStorage.getItem('theme') !== null) {
            preferredTheme = localStorage.getItem('theme');
        } else {
            preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        document.documentElement.setAttribute('data-theme', preferredTheme!);
    }, []);

    // TODO: fix this
    const [isLightMode, setIsLightMode] = useState(
        document.documentElement.getAttribute('data-theme') === 'light');

    const toggleTheme = () => {
        const newTheme = isLightMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsLightMode(!isLightMode);
    };

    const GreySwitch = styled(Switch)(() => ({
        '& .MuiSwitch-thumb': {
            backgroundColor: isLightMode ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: grey[600]
        },
        '& .MuiSwitch-track': {
            backgroundColor: grey[600]
        }
    }));

    return (
        <button className={'flex fixed bottom-8 left-8'}
        onClick={toggleTheme}>
            <GreySwitch
                        checked={isLightMode}
                        size={'small'}
            />
            <p className={'text-xs self-center pl-1'}>Lights on/off</p>
        </button>

    );
}