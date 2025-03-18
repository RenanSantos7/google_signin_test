import styled from 'styled-components/native';

export const Card = styled.View.attrs({
	style: { elevation: 2 },
})`
	width: 80%;
	background-color: #fff;
	padding: 20px;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;

export const Photo = styled.Image.attrs({
	resizeMode: 'contain',
})`
	width: 96px;
	height: 96px;
	border-radius: 48px;
	border: 3px solid #ccc;
`;

export const Title = styled.Text`
	font-weight: bold;
	font-size: 20px;
`;

export const NormalText = styled.Text`
  font-size: 16px;
`;

export const Button = styled.Pressable.attrs({
    android_ripple: {
        color: '#b80101',
    }
})`
  background-color: #d30303;
  padding: 16px;
  margin-top: 24px;
  width: 80%;
  border-radius: 12px;
`;

export const ButtonTxt = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;
