# Twitter fake

Projeto desenvolvido na semana Omnistack da RocketSeat. O objetivo da aplicação é ter um fluxo similar ao do twitter utilizando Node, React e MongoDB.


## Como testar na minha máquina?

Para baixar, basta clonar este repositório na sua máquina:

```sh
git clone https://github.com/lucas471/twitter-fake
```
### Configurar MongoDB(mLab)<br>
Crie uma conta em <a href="http://mlab.com">mlab.com</a>, crie um novo MongoDB Deployment, crie um novo usuario, copie a MongoDB URI no seu dashboard,cole no arquivo de conexão(backend/src/index.js),e altere os dados conforme os seus:<br>
```
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds121475.mlab.com:21475/<nomeDoSeuBancoAqui>', { useNewUrlParser: true });
```
Dentro de ambas as pastas(frontend, backend) rode:
```
yarn install
```
```
yarn start
```
Provavelmente, irá aparecer uma notificação para alterar a porta do React para diferente de 3000 ou algo do tipo. Ambos precisam rodar em portas diferentes.<br><br>
<strong>Happy Hacking</strong>


