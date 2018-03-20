import React from 'react';
import {Bar} from 'react-chartjs-2';

export default class PollTile extends React.Component {
    state = {
    	votes: []        
    }

    componentDidMount() {
    	fetch('/getpoll?poll=0')
    		.then(res => res.json())
    		.then(votes => this.setState({
    			votes
			}));
	}
    
    render() {
		/* 
		this.state.votes.forEach(item => {
			switch (item.vote.vote) {
				case "Windows":
					t1++;
					break;
				case "Linux":
					t2++;
					break;
				case "OS X":
					t3++;
					break;
				default:
					break;
			}
		}); */

		const data = {
			labels: ['Windows', 'Linux', 'OS X'],
			datasets: [{
				label: 'OS Poll',
				backgroundColor: ['#00b894', '#00cec9', '#6c5ce7'],
				borderWidth: 1,
				hoverBackgroundColor: ['#55efc4', '#81ecec', '#a29bfe'],
				hoverBorderColor: '#dfe6e9',
				data: [3,2,5],
			}]
        };
        
		return(
            <Bar
                data={data}
                width={100}
                height={50}
                options={{
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                suggestedMax: 20,
                            }
                        }]
                    },
                    maintainAspectRatio: false
                }}
            />
		);
	}
}