import React, { useEffect, useState } from 'react'
import TopFiveBest from './TopFiveBest/TopFiveBest'
import { fetchTopFive } from '../../api';
import { TopFiveContainer } from './TopFive.styled';

const Best = () => {

    const [topFiveData, setTopFiveData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await fetchTopFive()
            setTopFiveData(data)
        }
        getData()
    }, [])
    return (
        <TopFiveContainer>
             {topFiveData.map(recipe => (
                    <TopFiveBest {...recipe} key={recipe._id} id={recipe._id}/>
                ))}
        </TopFiveContainer>
    );
}

export default Best;