import { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function About(){
    const [formData,setFormData] = useState({
        full_name:"",
        email:"",
        pwd:"",
    });
    const inputChange = (e)=>{
        const key = e.target.name; // "full_name" "email" "pwd"
        const v = e.target.value;
        setFormData({...formData,[key]:v});
    }
    const [errors,setErrors] = useState({});
    const validateForm = ()=>{
        const newErrors = {};
        if(!formData.full_name.trim()){
            newErrors.full_name = "Vui lòng nhập đầy đủ họ và tên";
        }
        if(!formData.email.trim()){ 
            newErrors.email = "Vui lòng nhập email";
        }
        // regex email
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regex.test(formData.email.trim())){
            newErrors.email = "Vui lòng nhập đúng định dạng email";
        }
        //.....
        setErrors(newErrors);
        if(Object.keys(newErrors).length > 0){ // nếu có bất kỳ 1 error nào thì ko đạt
            return false;
        }
        return true;

    }
    const handleSubmit = (e)=>{
        e.preventDefault(); // chặn submit form theo dạng html thông thường
        // kiem tra gia tri hop le hay ko
        const isValid = validateForm();
        if(!isValid){
            return;
        }
        // gui formData di

    }
    return (
        <Container>
            <h1 className="text-center">Register</h1>
            <Form onSubmit={handleSubmit} action="#" method="post">
                <Form.Group className="mb-3">
                    <Form.Label>Full name</Form.Label>
                    <FormControl onChange={inputChange} value={formData.full_name} name="full_name" type="text" required placeholder="Full name"/>
                    {errors.full_name && <p className="text-danger">{errors.full_name}</p>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <FormControl onChange={inputChange} value={formData.email}  name="email" type="email" placeholder="Email" />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <FormControl onChange={inputChange} value={formData.pwd} name="pwd" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="primary">Register</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default About;