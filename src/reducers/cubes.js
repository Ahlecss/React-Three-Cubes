export const initialState = {
    number: 0,
    cubes: [],
    special: []
};

export const reducer = (state, action) => {
    let cubes;
    switch (action.type) {
        case 'ADD_CUBE':
            
            const cube = {
                number: state.number,
                stop: true,
            };

            return {
                ...state,
                cubes: state.cubes.concat(cube),
                number: state.number + 1,
            };


        case "SHUFFLE":

            cubes = state.cubes;

            cubes.sort(() => Math.random() - 0.5);

            return {
                ...state,
                cubes
            };

        case "CHANGE_ODD":

            cubes = state.cubes.map((cube) => {
                if (cube.number % 2 == 1) cube.stop = false;

                return { ...cube };
            });

            return {
                ...state,
                cubes,
            };


        case "STOP_ODD":
            cubes = state.cubes.map((cube) => {
                if (cube.number % 2 == 1) cube.stop = true;

                return { ...cube };
            });

            return {
                ...state,
                cubes,
            };

        case 'SPECIAL':
            const { number } = action;
            return {
                ...state,
                special: state.special.concat(number)
            }

        default:
            return state;
    }


}