<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactFormController extends AbstractController
{
    #[Route('/reactform', name: 'react_form')]
    public function index(): Response
    {
        return $this->render('react_form/index.html.twig', [
            'controller_name' => 'ReactFormController',
        ]);
    }
}
