const chalk = require('chalk')
const axios = require('axios')
const fetch = require('node-fetch')
const cfonts = require('cfonts')

exports.color = color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

exports.getRandom = getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const getGroupAdmins = (participants) => {
	admins = [];
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : '';
	}
	return admins;
};

exports.getBuffer = getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.banner = banner = cfonts.render(('Base|Mia'), {
    font: 'block',
    color: 'red',
    align: 'center',
    gradient: ["red","white"],
    lineHeight: 3
  });
