import React from 'react';
import { Box, Grid } from 'grommet';

const Skills = (props) => {
    return ( 
        <>
        <Grid columns="small" gap="small">
        {props.user ? 
        props.user.skills.map((skill) => {
            return <Box key={skill.name} align="center" background="accent" animation={{"type": "pulse", "duration": 5000}}>
                {skill.name}
                    </Box>
        })
        :
        <></>
        }
        </Grid>
        </>
     );
}
 
export default Skills;