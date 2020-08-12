import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem/Index';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function handleSearchTeachers(e: FormEvent) {
        e.preventDefault();

        const res = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(res.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={handleSearchTeachers} >
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Ciências', label: 'Ciências'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Química', label: 'Química'},
                            { value: 'História', label: 'História'},
                            { value: 'Gramática', label: 'Gramática'},
                            { value: 'Matemática', label: 'Matemática'},
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => setWeek_day(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-feira'},
                            { value: '2', label: 'terça-feira'},
                            { value: '3', label: 'Quarta-feira'},
                            { value: '4', label: 'Quinta-feira'},
                            { value: '5', label: 'Sexta-feira'},
                            { value: '6', label: 'Sábado'},
                        ]}
                    />
                    <Input name="time" label="Hora" type="time" value={time} onChange={e => setTime(e.target.value)} />

                    <button type="submit" >Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </main>
        </div>
    );
}

export default TeacherList;