import axios from 'axios';
const API_URL_POR_REGIAO = "http://dtcat.maissaudepalmas.com.br/api/v1/notifications/dados_por_regiao.json";

export const NotificacoesService = {
	dadosPorRegiao (){
		/**
		 * return new Promise()
		 * Use: NotificacoesService.dadosPorRegiao().then((response) => {})
		 */
		return axios.get(API_URL_POR_REGIAO);
	}
}