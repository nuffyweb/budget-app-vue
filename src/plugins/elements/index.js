import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import {
    Alert,
    Row,
    Col,
    Main,
    Header,
    Container,
    Table,
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const elements = [
    Alert,
    Row,
    Col,
    Main,
    Header,
    Container,
    Table,
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option
];
locale.use(lang);
elements.forEach(element => Vue.use(element, {locale}));