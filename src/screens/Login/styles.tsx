import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #ddd;
`;

export const Button = styled.Pressable.attrs({
	android_ripple: {
		color: '#fafafa',
	},
	elevation: 1,
})`
	background-color: #fff;
	padding: 10px;
	border-radius: 8px;
	flex-direction: row;
	align-items: center;
	gap: 16px;
`;

export const ButtonTxt = styled.Text`
  font-size: 16px;
`;


export const GoogleLogo = styled.Image.attrs({
    resizeMode: 'contain',
    source: require('./assets/google.png')
})`
	width: 24px;
	height: 24px;
`;
