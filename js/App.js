class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], months: [], currentMonthData: [] };
        this.handleMonthOnMouseEnter = this.handleMonthOnMouseEnter.bind(this);
        this.handleMonthOnMouseLeave = this.handleMonthOnMouseLeave.bind(this);
    }

    componentDidMount() {
        let months = [];
        months.length = 12;
        months.fill(0);

        fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users').then(data => data.json()).then(data => {
            data.forEach(({ dob }) => {
                let date = new Date(dob);
                months[date.getMonth()]++;
            });
            months = months.map(number => {
                if (number >= 11) return 'red';else if (number >= 7) return 'green';else if (number >= 3) return 'blue';else return 'gray';
            });
            this.setState({ months: months, users: data });
        });
    }

    handleMonthOnMouseEnter(monthNumber) {
        let usersByMonth = this.state.users.filter(({ dob }) => {
            let date = new Date(dob);
            if (date.getMonth() === monthNumber) return true;
            return false;
        });
        this.setState({ currentMonthData: usersByMonth });
    }

    handleMonthOnMouseLeave() {
        this.setState({ currentMonthData: [] });
    }

    render() {
        const { months, users, currentMonthData } = this.state;
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'months' },
                months.map((color, index) => React.createElement(Month, { color: color, month: index, key: index, handleOnMouseEnter: this.handleMonthOnMouseEnter, handleOnMouseLeave: this.handleMonthOnMouseLeave }))
            ),
            React.createElement(Users, { users: currentMonthData.length ? currentMonthData : users })
        );
    }
}