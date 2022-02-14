<?php

namespace App\Form;

use App\Entity\Marque;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MarqueType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            // ici on veut rajouter un fichier qui permet de telecharger des fichier photos etc...
            ->add('photos',FileType::class,[
//Si vous souhaitez que le champ soit ignoré lors de la lecture ou de l'écriture dans l'objet, vous pouvez définir l'option mappée sur false.
                'mapped'=>false
            ])

        ;
    }
    //On peut rajouter ce code qui permettra de mettre des contraintes
    //https://symfony.com/doc/current/controller/upload_file.html
    // // unmapped fields can't define their validation using annotations
    //                // in the associated entity, so you can use the PHP constraint classes
    //                'constraints' => [
    //                    new File([
    //                        'maxSize' => '1024k',
    //                        'mimeTypes' => [
    //                            'application/pdf',
    //                            'application/x-pdf',
    //                        ],
    //                        'mimeTypesMessage' => 'Please upload a valid PDF document',
    //                    ])
    //                ],
    //            ])

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Marque::class,
        ]);
    }
}
