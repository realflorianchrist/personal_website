'use client'
import {useEffect, useState} from "react";
import {Switch} from "@mui/material";
import {grey} from '@mui/material/colors';
import {styled} from "@mui/system";

export default function ThemeSwitch() {
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        toggleTheme()
    }, []);

    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    const toggleTheme = () => {
        setIsChecked(!isChecked);
        isChecked
            ? setDarkMode()
            : setLightMode();
    };

    const GreySwitch = styled(Switch)(() => ({
        '& .MuiSwitch-thumb': {
            backgroundColor: isChecked ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: grey[600]
        }
    }));

    return (
        <button className={'flex fixed bottom-8 left-8'}
        onClick={toggleTheme}>
            <GreySwitch
                        checked={isChecked}
                        size={'small'}
            />
            <p className={'text-xs self-center pl-1'}>Lights on/off</p>
        </button>

    );
}