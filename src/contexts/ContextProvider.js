import { useContext, createContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
	chat: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);
	const [themeSettings, setThemeSettings] = useState(false);
	const [currentColor, setCurrentColor] = useState('#4ade80');
	const [currentMode, setCurrentMode] = useState('Light');

	const handleClick = (clicked) =>
		setIsClicked({ ...initialState, [clicked]: true });

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
	};

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				currentColor,
				currentMode,
				activeMenu,
				screenSize,
				isClicked,
				initialState,
				themeSettings,
				setScreenSize,
				handleClick,
				setIsClicked,
				setActiveMenu,
				setCurrentColor,
				setCurrentMode,
				setMode,
				setColor,
				setThemeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
