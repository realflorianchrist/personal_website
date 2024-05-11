'use client'
import styles from './ThemeSwitch.module.css'
import {useState} from "react";
import {Switch} from "@mui/material";
import {grey} from '@mui/material/colors';
import {styled} from "@mui/system";

export default function ThemeSwitch() {
    const [isChecked, setIsChecked] = useState(true);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    const GreySwitch = styled(Switch)(() => ({
        '& .MuiSwitch-thumb': {
            backgroundColor: isChecked ? 'rgb(255,255,255)' : 'rgb(0,0,0)'
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: grey[600]
        }
    }));

    return (
        <button className={'flex fixed bottom-5 left-8'}
        onClick={handleChange}>
            <GreySwitch className={styles['switch']}
                        checked={isChecked}
                        size={'small'}
            />
            <p className={'text-xs self-center pl-1'}>Lights on/off</p>
        </button>

    );
}